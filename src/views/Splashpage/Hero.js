import React, {
  useState,
} from 'react';
import styled from '@emotion/styled';

import styles from 'style_variables';

import ButtonPrimary from 'components/ButtonPrimary';
import ButtonTertiary from 'components/ButtonTertiary'; 
import Modal from 'components/Modal';
import Input from 'components/Input'; 

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 100vh;
  font-family: Roboto;
  background: linear-gradient(180deg, #B0DEFF 0%, rgba(254, 243, 207, 0.01) 100%);
  `;

const Content = styled.div`
  max-width: 768px;
  @media screen and (max-width: 900px) {
    margin: 15px 10px 15px 10px;
  }
`;

const Heading = styled.div`
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 60px;
  letter-spacing: 0.05em;
  color: #3F3F3F;
  margin: 45px 0 40px 0;
`;

const SubHeading = styled.div`
  max-width: 640px;
  font-style: normal;
  font-weight: normal;
  line-height: 44px;
  font-size: 36px;
  letter-spacing: 0.05em;
  color: #3F3F3F;
  margin-bottom: 45px;
`;

const StyledButton = styled(ButtonPrimary)`
  width: ${styles.width[6]}px;
`;

const ModalHeading = styled(Heading)`
  font-size: ${styles.font_size[6]}px;
  margin:  20px 0 0 0;
`;

const FormContainer = styled.div`
  margin: 25px 20px 0 20px;
  .margin {
    margin-top: 15px;
  }
`;

const ModalButton = styled(ButtonPrimary)`
  margin-bottom: 25px;
`;

const ModalCloseButton = styled(ButtonTertiary)`
  align-self: flex-end;
  color: ${styles.neutral_color[6]};
  margin: 0 20px 15px 0;
`;

export default () => {

  const [showModal, setShowModal] = useState(false);
  const [informationSend, setInformationSend] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSignupClick() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleSubmitData() {
    console.log(name, email);
    fetch(process.env.REACT_APP_CREATE_LEAD_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(
        {
          TableName: "nokeys_leads",
          Item: {
            name,
            email
          }
        })
    }).then(res => console.log(res));
    setInformationSend(true);
    setTimeout(handleModalClose, 500);
  }

  return (
    <Wrapper>
      <Content>
        <Heading>
          Automated Amazon PPC
        </Heading>
        <SubHeading>
          Climb to the top of organic ranking with fully automated Amazon PPC campaigns
        </SubHeading>
        <StyledButton
          onClick={handleSignupClick}
        >
          Sign Up
        </StyledButton>
      </Content>
      {
        showModal &&
        <Modal 
          onBackgroundClick={handleModalClose}
          >
          {
            !informationSend &&
          <ModalHeading>Join the Beta</ModalHeading>
          }
          {
            informationSend &&
          <ModalHeading>Send</ModalHeading>
          }
          <FormContainer>
            <Input
              value={name}
              onChange={evt => setName(evt.target.value)}
              placeholder={"Name"}
              />
            <Input
              value={email}
              onChange={evt => setEmail(evt.target.value)}
              placeholder={"Email"}
              type="email"
              className="margin"
              onKeyPress={evt => evt.key === 'Enter' && handleSubmitData()}
              />
            <ModalButton
              className="margin"
              onClick={handleSubmitData}
            >
              Send
            </ModalButton>
          </FormContainer>
          <ModalCloseButton
            onClick={handleModalClose}
          >
              close
          </ModalCloseButton>
        </Modal>
      }
    </Wrapper> 
  );
};
