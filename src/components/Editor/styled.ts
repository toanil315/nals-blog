import ReactQuill from 'react-quill';
import styled, { css } from 'styled-components';

export const StyledEditor = styled(ReactQuill)<{ error?: boolean }>`
  .ql-toolbar {
    border-top-left-radius: ${({ theme }) => theme.radii.md};
    border-top-right-radius: ${({ theme }) => theme.radii.md};
  }

  .ql-container {
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};

    .ql-editor {
      min-height: 150px;
    }
  }

  ${({ theme, error }) =>
    error &&
    css`
      .ql-toolbar {
        border-color: ${theme.colors.danger} !important;
      }

      .ql-container {
        border-color: ${theme.colors.danger} !important;
        box-shadow: 0 5px 10px ${theme.colors.danger}40 !important;
      }
    `}
`;
