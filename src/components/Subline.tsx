import styled from 'styled-components';

interface Props {
  sectionTitle?: boolean;
}

export const Subline = styled.div<Props>`
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.sectionTitle && 'text-align: center;'}
`;
