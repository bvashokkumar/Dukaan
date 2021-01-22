import React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
    margin: 0px;
    padding: 16px 16px 16px 24px;
    display: flex;
    background-color: var(--dark);
`;

const ActiveMenuContainer = styled.div`
    margin: 0px;
    padding: 16px 16px 16px 24px;
    display: flex;
    background-color: rgb(247, 247, 247,0.1);
`;

const ActiveMenuFont = styled.div`
    margin: auto 0px auto 16px;
    color:#ffffff;
    font-family: GalanoGrotesqueMedium;
    font-size:16px;
`;

const MenuFont = styled.div`
    margin: auto 0px auto 16px;
    color:rgb(255,255,255,0.8);
    font-family: GalanoGrotesqueRegular;
    font-size:16px;
`;

const CountsChip = styled.div`
    padding: 2px 11px;
    border-radius: 14px;
    background-color: #ea6f57;
    color:#ffffff;
    font-family: GalanoGrotesqueMedium;
    font-size:14px;
    line-height: 1.43;
    font-weight: 500;
`;

const NeedHelpContainer = styled.div`
    margin: auto 16px 16px 16px;
    padding: 8px 16px;
    border-radius: 4px;
    background-color: rgb(247, 247, 247,0.1);
    line-height:1.5;
`;

function Sidebar() {
    return (
            <div style={{ width: "15%", minWidth: '225px', backgroundColor: "#1e2640", padding: "24px 0 16px", display: 'flex', flexDirection: 'column' }}>
                <div style={{ margin: "0 50px 40px 24px" }}><img src="assets_logo_white.svg" height="44px"></img></div>
                <ActiveMenuContainer>
                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons_navbar_home_active.svg" height="24px"></img></div>
                    <ActiveMenuFont>Home</ActiveMenuFont>
                </ActiveMenuContainer>
                <MenuContainer>
                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons_navbar_orders_inactive.svg" height="24px"></img></div>
                    <MenuFont>Orders</MenuFont>
                    <div style={{ margin: "auto 2px auto auto" }}>
                        <CountsChip>2</CountsChip>
                    </div>
                </MenuContainer>
                <MenuContainer>
                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons_navbar_catalogue_inactive.svg" height="24px"></img></div>
                    <MenuFont>Products</MenuFont>
                </MenuContainer>
                <MenuContainer>
                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons_navbar_marketing_inactive.svg" height="24px"></img></div>
                    <MenuFont>Marketing</MenuFont>
                </MenuContainer>
                <MenuContainer>
                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons_navbar_account_inactive.svg" height="24px"></img></div>
                    <MenuFont>Account</MenuFont>
                </MenuContainer>
                <NeedHelpContainer>
                    <div style={{ color: 'white', fontFamily: 'GalanoGrotesqueRegular', fontSize: '14px',lineHeight:'20px',opacity:'0.8' }}>Need any help?</div>
                    <div style={{ color: 'White', fontFamily: 'GalanoGrotesqueMedium', fontSize: '16px',lineHeight:'24px',fontWeight:'500' }}>Chat with us</div>
                </NeedHelpContainer>
            </div>
    );
}

export default Sidebar;