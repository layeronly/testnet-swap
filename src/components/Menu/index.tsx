import React, { useRef } from 'react'
import { Folder, Globe } from 'react-feather'
import styled from 'styled-components'
import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { ExternalLink } from '../../theme'
import { ButtonPrimary, ButtonLight } from '../Button'
import { FaBridge } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.text1};
  }
`

const StyledMenuButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};

  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 10.125rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -12.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`
const addNetwork = async () => {
  try {
      if (window.ethereum && (window.ethereum as any).isMetaMask) {
          // Type assertion to handle 'unknown' type
          const ethereum = window.ethereum as any;

          // Check if 'request' method is available
          if ('request' in ethereum) {
              await ethereum.request({
                  method: 'wallet_addEthereumChain',
                  params: [
                      {
                          chainId: '0xB1E78',
                          chainName: 'OnlyLayer Testnet',
                          nativeCurrency: {
                              name: 'Ethereum',
                              symbol: 'ETH',
                              decimals: 18,
                          },
                          rpcUrls: ['https://onlylayer.org/'],
                          blockExplorerUrls: ['https://onlyscan.info'],
                      },
                  ],
              });

              console.log('Network added successfully');
              toast.success('Network added successfully 👌', {
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
              });
          } else {
              throw new Error('Request method not available in window.ethereum');
          }
      } else {
          throw new Error('Wallet not detected. Make sure you have MetaMask or a compatible Ethereum wallet installed.');
      }
  } catch (error) {
      console.error('Error adding network:', (error as Error).message);
      toast.error(`Error adding network: ${(error as Error).message}😥`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
      });
  }
};

const handleButtonClicked = () => {
  toast.info('⚠️ Button is under maintenance. Please try again later',{
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  })
};

const Website = 'https://www.onlylayer.com/'
const Explorer = 'https://onlyscan.info/'
const Bridge = 'https://onlybridge.org'

export default function Menu() {
  const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  // const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledMenuButton onClick={toggle}>
        <StyledMenuIcon />
      </StyledMenuButton>

      {open && (
        <MenuFlyout>
          <MenuItem id="link" href={Website}>
            <Globe size={14} />
            Website
          </MenuItem>
          <MenuItem id="link" href={Explorer}>
            <Folder size={14} />
            Explorer
          </MenuItem>
          <MenuItem id="link" href={Bridge}>
            <FaBridge size={14} />
            Bridge
          </MenuItem>
          <ButtonLight onClick={addNetwork} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
              Add Chain
          <ToastContainer position="top-right" />
          </ButtonLight>
          {account && (
            <ButtonPrimary onClick={handleButtonClicked} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
              Claim ONLY
            </ButtonPrimary>
          )}
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
