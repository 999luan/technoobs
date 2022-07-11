import styled from "styled-components";

export const Container = styled.div`

    position: absolute;

    top: 60%;
    left: 22%;

    width: 380px;
    height: 450px;

    padding: 40px;
    transform: translate(40%, -60%);
    background: linear-gradient(180deg, #433882 0%, rgba(67, 56, 130, 0.541667) 99.99%, rgba(67, 56, 130, 0) 100%);

    box-sizing: border-box;
    box-shadow: 0 15px 25px #433882 ;

    border: 2px solid #000000;
    border-radius: 10px;

    button {
        position: relative;
        margin-left: 290px;
        margin-top: -15px;
        font-size: 22px;
        border: none;
        background: rgba(67, 56, 130, 0);
    }

 h2 {
    margin: -20px 0 60px 0;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-align: center;
}

.user-box {
    position: relative;
}

.user-box input {
    width: 100%;

    padding-left: 10px 0;
    margin-bottom: 30px;

    font-size: 16px;
    color: #fff;

    border: none;
    border-bottom: 1px solid #fff;

    outline: none;
    background: transparent;
}

.user-box input:focus ~ label,
.user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color:#179AB1;
    font-size: 12px;
}

.user-box label {
    position: absolute;

    top: 0;
    left: 0;

    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

.checkout {
    margin: 20px 20px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}

form a {
    position: relative;

    display: inline-block;

    padding: 10px 20px;
    color: #fff;
    font-size: 16px;

    text-decoration: none;
    text-transform: uppercase;

    overflow: hidden;
    transition: .5s;
    margin: 50px  100px 20px 90px;
    letter-spacing: 4px;

    cursor: pointer;
}

a:hover {
    background: #179AB1;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0 0 5px #179AB1,
                0 0 25px #179AB1,
                0 0 50px #179AB1,
                0 0 100px #179AB1;
}

a span {
    position: absolute;
    display: block;
}

a span:nth-child(1) {
    top: 0;
    left: -100%;

    width: 100%;
    height: 4px;

    background: linear-gradient(90deg, transparent, #179AB1);
    animation: btn-anim1 1s linear infinite;
} 

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }
    50%,100% {
        left: 100%;
    }
}

a span:nth-child(2) {
    top: 0;
    right: 100%;

    width: 4px;
    height: 100%;

    background: linear-gradient(180deg, transparent,#179AB1);
    animation-delay: .25s;
}

@keyframes btn-anim2 {
    0% {
        top: -100%;
    }
    50%,100% {
        top: 100%;
    }
}

a span:nth-child(3) {
    bottom: 0;
    right: -100%;

    width: 100%;
    height: 4px;

    background: linear-gradient(270deg, transparent, #179AB1);
    
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s;
}

@keyframes btn-anim3 {
    0% {
        right: -100%;
    }
    50%,100% {
        right: 100%;
    }
}

a span:nth-child(4) {
    bottom: -100%;
    left: 0;

    width: 4px;
    height: 100%;

    background: linear-gradient(360deg, transparent, #179AB1);
   
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s;
}

@keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }
    50%,100% {
        bottom: 100%;
    }
}
`