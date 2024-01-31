import styled from 'styled-components'
import img from './logo.svg'
import style from './Header.module.css'

//styled-components
const Title = styled.img `
width: 74.419px;
height: 30.545px;
flex-shrink: 0;
margin-left : 150px;
margin-top:5.55px;
cursor:pointer;
`

const Ul = styled.ul`
    list-style-type:none;
    margin-left:100px;
    display:flex;
    gap:48px;
    color:white;
    margin-top:10px
`
const LI = styled.li`
cursor:pointer;
`

const Select = styled.select`
color: var(--White, #FFF);
font-family: "Circular Std";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
border:none;
background: var(--Main, #5361E4);
cursor:pointer;
margin-left:108px;
margin-top:7px;
`

const Button = styled.button`
display: inline-flex;
height: 46px;
padding: 8px 24px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 12px;
background: var(--White, #FFF);
border:none;
cursor:pointer;
margin-left:38px
`
//primary-index.html

export default function Header() {
  return (
        <>
        <div className={style.allcontainer}>
            <div className={style.header}>
                <div className="header-logo">
                <Title src={img} alt="bu yerda rasm bor" />
                </div>
                <div className="uls">
                    <Ul>
                        <LI>Vakansiyalar</LI>
                        <LI>Kandidatlar</LI>
                        <LI>Kompaniyalar</LI>
                        <LI>Xizmatlar</LI>
                        <LI>Ta'lim</LI>
                    </Ul>
                </div>
                <div className="sel">
                    <Select>
                        <option value="1">O'z</option>
                        <option value="2">Rus</option>
                        <option value="3">Ing</option>
                    </Select>
                    <Button>Boshlash</Button>
                </div>
            </div>
        </div>
        </>
    )
}
