import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: #457568;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${getStatusBarHeight()}px;
`;
