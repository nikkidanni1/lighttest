import React, { useState } from "react";
import styled from "styled-components";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InfoIcon from '@material-ui/icons/Info';

const StyledButtonGroup = styled(ButtonGroup)`
    height: 50px; 
`;

const InfoButton = styled(Button)`
    width: 50px !important;
    border-radius: 0 !important;
    background: #0EA7FF !important;
    border: none !important;
    color: #fff !important;
    &:hover {
        opacity: .8;
    }
`;

const StyledButton = styled(Button)`
    border-radius: 0 !important;
    background: #0EA7FF !important;
    border: none !important;
    text-transform: none !important;
    color: #fff !important;
`;

const OverContent = styled.div`
    width: 100%;
    height: calc(100vh - 112px);
    position: absolute;
    z-index: 5;
    top: 64px;
    left: 0;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
`;

const Back = styled.div`
    color: #ccc;
    cursor: pointer;
    margin-bottom: 20px;
`;

const Text = styled.div`
    width: 80%;
`;

const InfoBlock = () => {
    let [isOpenContent, setIsOpenContent] = useState(false);
    return (
        <>
            {isOpenContent && <OverContent>
                <Back 
                    onClick={() => setIsOpenContent(false)}
                >
                    {"< Вернуться"}
                </Back>
                <Text>
                    «Casual» - это свободный и динамичный стиль, причем он используется не только в одежде, но и в интерьере. На рабочем месте это правильное распределение пространства, удобная деревянная мебель, натуральные ткани, а дома, в вашей квартире – это, в первую очередь, удобство и уют и много свободного пространства.
                    <br/><br/>
                    Простым решением для вашей прихожей может быть система крючков, установленных на деревянной плите или натянутая сетка, на которую можно вешать все, что угодно: обувь за каблуки, сумки, зонты, пакеты, одежду. Причем, даже дети спокойно справятся с этой задачей сами, если крючки или сетку разместить до самого пола.
                    <br/><br/>
                    Кухня в стиле «casual» - это, конечно, дерево. Хотя подойдет и пластик, если вы дополните интерьер клетчатыми, полосатыми, в горошек или в цветочек шторами и скатертью. Можно украсить по вашему разумению множеством разноцветных деталей: кружечек, баночек, плошек. Только не переусердствуйте, ведь «casual», прежде всего свобода, простор, а не помещение плотно забитое вещами.
                </Text>
            </OverContent>}
            <StyledButtonGroup fullWidth aria-label="full width outlined button group">
                <InfoButton
                    onClick={() => {
                        setIsOpenContent(true);
                    }}
                >
                    <InfoIcon />
                </InfoButton>
                <StyledButton disabled>Выберите цвет свечения</StyledButton>
            </StyledButtonGroup>
        </>
    );
};

export default InfoBlock;