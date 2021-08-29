import styled, { css } from 'styled-components';
import { device } from 'utils/screenSize';

export const PokemonGridStyled = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'grid')};
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const SearchRowStyled = styled.div`
  margin-bottom: 40px;
  display: flex;
  ${({ showBackButton }) => (showBackButton
    ? css` // 🔥 Visible arrow button
      justify-content: space-between;
      .__back { 
        display: inline;
      };
      .__input {
        @media ${device.mobileS} {
          width: 300px;
          margin-left: 20px;
        }
      }
    `
    : css` // 🔥 Hide arrow button
      justify-content: flex-end;
      .__back { 
        display: none;
      };
      .__input {
        @media ${device.mobileS} {
          width: 100%;
        }
        @media ${device.tablet} {
          width: 300px;
        }
      }
    `)};
  `;

export const PokemonDetailStyled = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`;
