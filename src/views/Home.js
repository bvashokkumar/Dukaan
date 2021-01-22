import React from "react";
import styled from "styled-components";
import Sidebar from '../components/sidebar';
import orderData from '../data/order.json';
import { HeaderContainer, 
    BlueRectangle, 
    Union, 
    WhiteCard, 
    WhiteCardLevel, 
    WhiteCardValue, 
    ActiveChip, 
    DisableChip, 
    OrderWhiteCard, 
    GreenBox, 
    CustomButton, 
    ButtonArrow } from './styles';

function Home() {
    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <Sidebar></Sidebar>
                <div style={{ width: "85%", backgroundColor: "#f7f7f7" }}>
                    <HeaderContainer>
                        <div style={{ color: '#1a181e', fontSize: '20px', fontFamily: 'GalanoGrotesqueMedium', fontWeight: '500' }}>Mano Super Market</div>
                        <div style={{ margin: "auto auto auto 8px" }}><img src="icons_verify.svg" height="24px"></img></div>
                        <BlueRectangle>
                            <Union>?</Union>
                            <div style={{ color: '#146eb4', fontFamily: 'GalanoGrotesqueMedium', fontSize: '14px', margin: 'auto auto auto 6px' }}>How to use</div>
                        </BlueRectangle>
                    </HeaderContainer>
                    <div style={{ display: 'flex', margin: '0px 32px 24px 32px' }}>
                        <div style={{ color: '#1a181e', fontSize: '20px', fontFamily: 'GalanoGrotesqueMedium', fontWeight: '500' }}>Share store link</div>
                        <div style={{ margin: 'auto 0px auto auto',padding:'6px 14px' ,  borderRadius: '4px',border: "solid 1px #cccccc",background:'White'}}>
                            <select name="month">
                                <option value="Last Month">Last Month</option>
                            </select>
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '0px 32px 24px 32px', justifyContent: 'space-between' }}>
                        <div style={{ width: '32%' }}>
                            <WhiteCard>
                                <div style={{ color: '#4d4d4d', fontSize: '16px', lineHeight: '24px', fontFamily: 'GalanoGrotesqueRegular', marginBottom: '12px' }}>
                                    Your customers can visit your online store and place the orders from this link.
                                </div>
                                <div style={{ lineHeight: '26px',marginBottom: '24px' }}>
                                    <a href="#" style={{ color: '#ee741f', fontSize: '18px', lineHeight: '26px', fontFamily: 'GalanoGrotesqueRegular', fontWeight: '500' }}>mydukaan.io/manosupermarket</a>
                                </div>
                                <div style={{ color: '#4d4d4d', fontSize: '16px', lineHeight: '24px', fontFamily: 'GalanoGrotesqueMedium', marginBottom: '12px', fontWeight: '500' }}>
                                    Share via
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ margin: "0 16px 0px 0px" }}><img src="Subtract.svg" height="36px"></img></div>
                                    <div style={{ margin: "0 16px 0px 0px" }}><img src="facebook.svg" height="36px"></img></div>
                                    <div style={{ margin: "0 16px 0px 0px" }}><img src="icons8-twitter_circled.svg" height="36px"></img></div>
                                </div>
                            </WhiteCard>
                        </div>
                        <div style={{ width: '32%' }}>
                            <WhiteCard style={{ marginBottom: '24px' }}>
                                <WhiteCardLevel>
                                    ORDERS
                                </WhiteCardLevel>
                                <WhiteCardValue>
                                    192
                                </WhiteCardValue>
                            </WhiteCard>
                            <WhiteCard>
                                <WhiteCardLevel>
                                    STORE VIEWS
                                </WhiteCardLevel>
                                <WhiteCardValue>
                                    96
                                </WhiteCardValue>
                            </WhiteCard>
                        </div>
                        <div style={{ width: '32%' }}>
                            <WhiteCard style={{ marginBottom: '24px' }}>
                                <WhiteCardLevel>
                                    TOTAL SALES
                                </WhiteCardLevel>
                                <WhiteCardValue>
                                    &#8377;1,55,920
                                </WhiteCardValue>
                            </WhiteCard>
                            <WhiteCard>
                                <WhiteCardLevel>
                                    PRODUCT VIEWS
                                </WhiteCardLevel>
                                <WhiteCardValue>
                                    2,313
                                </WhiteCardValue>
                            </WhiteCard>
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '0px 32px 24px 32px' }}>
                        <div style={{ color: '#1a181e', fontSize: '20px', fontFamily: 'GalanoGrotesqueMedium', fontWeight: '500' }}>Active Orders</div>
                        <div style={{ margin: 'auto 0px auto auto', display: 'flex' }}>
                            <div style={{ color: '#808080', fontSize: '18px', fontFamily: 'GalanoGrotesqueMedium', borderBottom: '1px solid #808080',fontWeight: '500' }}>View All</div>
                            <div style={{ margin: 'auto auto auto 9px' }}><img src="icons_arrow.svg" height="18px"></img></div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', margin: '0px 32px 24px 32px' }}>
                        <ActiveChip>Pending (12)</ActiveChip>
                        <DisableChip>Accepted (33)</DisableChip>
                        <DisableChip>Shipped (121)</DisableChip>
                    </div>
                    <div style={{ display: 'flex', margin: '0px 32px 24px 32px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {orderData.map(item => {
                           return  <div style={{ width: '32%' }}>
                             <OrderWhiteCard>
                                <div style={{ display: 'flex', marginBottom: '12px' }}>
                                    <div style={{ color: '#000000', fontSize: '16px', fontFamily: 'GalanoGrotesqueMedium', fontWeight: '500' }}>Order #{item.orderId}</div>
                                    {item.new ? <GreenBox>NEW</GreenBox> : null}
                                    <div style={{ color: '#808080', fontSize: '14px', fontFamily: 'GalanoGrotesqueRegular', margin: 'auto 0px auto auto' }}>{item.time}</div>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginRight: '16px' }}><img src="Rectangle 47@3x.png" height="80px"></img></div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
                                        <div style={{ color: '#808080', fontSize: '16px', fontFamily: 'GalanoGrotesqueRegular', lineHeight: '24px' }}>{item.count}</div>
                                        <div style={{ color: '#146eb4', fontSize: '18px', fontFamily: 'GalanoGrotesqueMedium', lineHeight: '26px', fontWeight: '500' }}>  &#8377;{item.cost}</div>
                                    </div>
                                    <div style={{ margin: 'auto 0px 0px auto' }}>
                                        <CustomButton>
                                            <div>Details</div>
                                            <ButtonArrow><img src="icons_arrow.svg" height="16px"></img></ButtonArrow>
                                        </CustomButton>
                                    </div>
                                </div>
                            </OrderWhiteCard>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;