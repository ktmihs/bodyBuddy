import styled from '@emotion/styled';

export const StyledRightLinkModal = styled.div`
  z-index: 100;
  position: absolute;
  top:40%;
  left: 50%;
  transform: translateX(-50%);
  background-color:white;
  width: 331px;
  text-align: center;
  overflow: hidden;
  border-radius:15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  .modal-content {
    font-size: 15px;
    padding:40px 0;
  }

  .modal-button-wrapper {
    display: flex;

    button,
    a {
      font-size: 15px;
      height:45px;
    }

    button {
      border: none;
      color:${({ theme }) => theme.purple}
      background-color: #f6f6f6;
      width:50%;
    }

    a {
      display:flex;
      align-items:center;
      justify-content:center;
      text-decoration: none;
      background-color:${({ theme }) => theme.purple};
      color: white;
      width:50%;
    }
  }
`;

export const StyledRightButtonModal = styled.div`
  z-index: 100;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  width: 331px;
  text-align: center;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

  .modal-content {
    font-size: 15px;
    padding: 40px 0;
  }

  .modal-button-wrapper {
    display: flex;

    .left,
    .right {
      font-size: 15px;
      height: 45px;
      border: none;
      width: 50%;
    }

    .left {
      background-color: #f6f6f6;
      color: ${({ theme }) => theme.purple};
    }
    .right {
      background-color: ${({ theme }) => theme.purple};
      color: white;
    }
  }
`;
