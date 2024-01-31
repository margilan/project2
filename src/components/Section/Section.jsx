import styled from "styled-components"
import style from './Section.module.css'
import img from './bg.png'
import images from './opaxon.svg'
import insta from './instagram.svg'
import telegram from './telegram.svg'
import git from './iconoir_github.svg'
import fec from './fecbook.svg'



//style


//code

const ALL = styled.h3`
color: var(--30-black, #B3B3B3);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 450;
line-height: 130%; /* 20.8px */
cursor: pointer;
margin-left: 3px;
margin-top: 16px;
`
const Paragref = styled.p`
color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 130%; /* 41.6px */
cursor: pointer;
`
const Images = styled.img`
margin-top:32px;
margin-bottom:20px;
`
const P = styled.p`
color: var(--Mai, #5361E4);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top:20px;
`
const Span = styled.span `
color: var(--Dark, #2A2941);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: "Circular Std";
    font-size: 14px;
    font-weight: 450;
    line-height: normal;
`
const IN = styled.input`
display: flex;
    width: 652px;
    height: 56px;
    padding: 18px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid #E3E3E3;
    margin-top: 20px;
    margin-bottom:10px;
`
const Spann = styled.span`
color: var(--Dark, #2A2941);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: "Circular Std";
    font-size: 14px;
    font-weight: 450;
    line-height: normal;
`

const Con = styled.input`
border-radius: 16px;
border: 1px solid #E3E3E3;
display: flex;
width: 652px;
padding: 18px;
align-items: flex-start;
gap: 10px;
margin-top: 8px;
`
const Pi = styled.p`
margin-top: 20px;
color: var(--Dark, #2A2941);
font-feature-settings: 'clig' off, 'liga' off;
font-family: "Circular Std";
font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: normal;
width: 138px;
cursor: pointer;
margin-bottom:10px;
`
const Conn = styled.input`
border-radius: 16px;
border: 1px solid #E3E3E3;
display: flex;
width: 652px;
height:150px;
padding: 18px;
align-items: flex-start;
gap: 10px;
margin-top: 8px;
`

export default function Section() {
  return (
        <>
        <div className={style.ALL}>
            <div className="header">
                <div className="header-text">
                    <div className="one-text">
                        <Paragref>Kompaniya ma’lumotlari</Paragref>
                    </div>
                    <div className="two-text">
                        <ALL>Kompaniya haqidagi ma’lumotlarni kiriting</ALL>
                    </div>
                </div>
                <div className={style.umumiy}>
                    <Images src={img} alt="Bu yerda rasm bor !!!" />
                    <P>Yuklash</P>
                </div>
                <div className="inputs">
                    <div className="one-inputs">
                        <Span>Kompaniya nomi *</Span>
                        <div className="inp">
                        <IN className={style.input} type="text" placeholder="Kompaniya nomi ..." />
                        </div>
                    </div>
                    <div className="two-inputs">
                        <Spann>Email *</Spann>
                        <div className="inp">
                        <IN className={style.input} type="text" placeholder="Email nomi ..." />
                        </div>
                    </div>
                    <div className="three-inputs">
                        <Spann>Telefon raqam *</Spann>
                        <div className="inp">
                        <IN type="text" placeholder="UZ +9989" />
                        </div>
                    </div>
                </div>
                <p className={style.p}>Linklar:</p>
                <div className={style.linki}>
                    <div className="one link">
                        <button className={style.buton}>
                            <img src = {images} alt="" />
                        </button>
                    </div>
                    <div className="one link">
                        <button className={style.buton}>
                            <img src = {insta} alt="" />
                        </button>
                    </div>
                    <div className="one link">
                        <button className={style.buton}>
                            <img src = {telegram} alt="" />
                        </button>
                    </div>
                    <div className="one link">
                        <button className={style.buton}>
                            <img src = {fec} alt="" />
                        </button>
                    </div>
                    <div className="one link">
                        <button className={style.buton}>
                            <img src = {git} alt="" />
                        </button>
                    </div>
                </div>
                <div className="inputss">
                    <div className="first-in">
                        <div className="p">
                            <Pi>Yashash joyi</Pi>
                        </div>
                        <Con className={style.Input} type="text"  placeholder="Yashash joy"/>
                    </div>
                    <div className="first-in">
                        <div className="p">
                            <Pi>Davlat *</Pi>
                        </div>
                        <Con className={style.Input} type="text"  placeholder="Davlatingizni kiriting ... "/>
                    </div>
                    <div className="first-in">
                        <div className="p">
                            <Pi>Shahar</Pi>
                        </div>
                        <Con className={style.Input} type="text"  placeholder="Shaharingizni kiriting ..."/>
                    </div>
                    <div className="first-in">
                        <div className="p">
                            <Pi>Izoh *</Pi>
                        </div>
                        <Conn className={style.Input} type="text"  placeholder="Izoh kiriting ..."/>
                    </div>
                </div>
                <div className={style.buttons}>
                    <div className="one-buton">
                        <On>ORTGA</On>
                    </div>
                    <div className="two-buton">
                        <OFF>KEYINGI</OFF>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
const On = styled.button`
display: flex;
width: 179.841px;
height: 60px;
padding: 15px 30px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 16px;
background: #F8F8F8;
border:none;
cursor:pointer;
`
const OFF = styled.button`
display: flex;
width: 179.841px;
height: 60px;
padding: 15px 30px;
justify-content: center;
align-items: center;
gap: 10px;
border:none;
color:white;
flex-shrink: 0;
border-radius: 16px;
background: blue;
cursor:pointer;
`
