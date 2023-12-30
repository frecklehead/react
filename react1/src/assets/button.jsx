function Button(){
  styled.button`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 150px;
  height: 50px;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: top 0.6s ease-in-out, left 0.3s ease-in-out;

  &:hover {
    ${({ isMoving }) => isMoving && `
      top: ${Math.random() * window.innerHeight}px;
      left: ${Math.random() * window.innerWidth}px;
    `}
  }
`;

}
export default Button;