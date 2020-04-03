import styled from "styled-components";

interface ProfilePicProps {
  size?: number;
}

const ProfilePic = styled.img<ProfilePicProps>`
  border-radius: 50%;
  width: ${props => props.size ? props.size : '60'}px;
  height: ${props => props.size ? props.size : '60'}px;
`;

export default ProfilePic;