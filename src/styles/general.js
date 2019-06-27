import styled from 'styled-components/native';

export const Input = styled.TextInput`
  background: #fff;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  color: #000000;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  background: #e5293e;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
