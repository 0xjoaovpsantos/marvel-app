import styled from 'styled-components/native';
import AppColors from '../../utils/appColors';

export const Container = styled.View`
  background-color: ${AppColors.headerColor};
  padding: 20px;
`;

export const InputContainer = styled.View`
  background-color: ${AppColors.backgroundInputColor};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`;
