import styled from "styled-components";

const BoxContainer = styled.div`
  background-color: blueviolet;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: contain;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  top: 0;
  bottom: 0;
  left: 0px;
  margin: auto;
  animation: animates 2s infinite ease alternate;
  @keyframes animates {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  z-index: 10;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.4);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  @keyframes animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 70% 40%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

export default function App() {
  return (
    <div className="App">
      <BoxContainer>
        <Image
          alt="blob-img"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        />
      </BoxContainer>
    </div>
  );
}
