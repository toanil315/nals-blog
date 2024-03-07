import { Input } from 'reactstrap';
import styled, { css } from 'styled-components';

export const StyledRsInput = styled(Input)<{ error?: boolean }>`
  padding: 14px 16px;

  ${({ theme, error }) =>
    error &&
    css`
      border-color: ${theme.colors.danger} !important;
      box-shadow: 0 5px 10px ${theme.colors.danger}40 !important;
    `}
`;
