import styled from 'styled-components'

const Button = styled.button`
    color: #FEA82F;
    border: 1px solid #FEA82F;
    box-sizing: border-box;
    cursor: pointer;
    padding: 17px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .4s;
    &:hover, &:focus{ opacity: .5; }
`;

export default Button;