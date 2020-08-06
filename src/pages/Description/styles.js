import styled from 'styled-components/native';
import AppColors from '../../utils/appColors';

export const Container = styled.View`
  flex: 1;
  background-color: ${AppColors.backgroundColor};
`;

export const Wrapper = styled.View`
  padding: 20px;
`;

export const Header = styled.View`
  height: 80px;
  background-color: ${AppColors.headerColor};
`;

export const Profile = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 32px;
  color: ${AppColors.fontColor};
  font-weight: bold;
  text-align: center;
`;

export const About = styled.View`
  margin-top: 20px;
`;

export const TitleSection = styled.Text`
  color: ${AppColors.descriptionTitlesColor};
`;

export const DescriptionText = styled.Text`
  color: ${AppColors.fontColor};
`;

export const Comics = styled.View`
  margin-left: 20px;
`;
