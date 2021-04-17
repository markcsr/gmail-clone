import React from 'react'
import styled from 'styled-components'
import {sidebarButtonItems} from '../data/SidebarButtonItems'
import Compose from '../buttons/Compose'
import { ListItemAvatar } from '@material-ui/core'

function Sidebar() {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>
            <SideButtonsWrapper>
                {
                    sidebarButtonItems.map(item =>(
                        <SideButtonItem>{item.icon} {item.text}</SideButtonItem>
                    ))
                }
            </SideButtonsWrapper>
            <MeetWrapper>

            </MeetWrapper>
            <HangoutWrapper>

            </HangoutWrapper>
            <BottomIconsWrapper>
                
            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: 100vh;
`
const ComposeWrapper = styled.div`
    display:grid;
    place-items: start;
    padding: 10px 20px;
`
const SideButtonsWrapper = styled.div`
    
`
const MeetWrapper = styled.div``
const HangoutWrapper = styled.div``
const BottomIconsWrapper = styled.div``
const SideButtonItem =styled.div`
    display:grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;     
    border-radius: 0 100px 100 px 0;
    cursor: pointer;
    margin-right: 8px;
    :hovor{
        background-color: #f5f7f7
    }      
`
