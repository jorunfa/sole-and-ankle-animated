import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <NormalLink>{children}</NormalLink>
      <BoldLink>{children}</BoldLink>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow-y: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NormalLink = styled.span`
  transition: transform 400ms;
  display: block;

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transform: translateY(-100%);
      transition-duration: 200ms;
    }
  }
`;

const BoldLink = styled(NormalLink)`
  position: absolute;
  font-weight: ${WEIGHTS.bold};
  left: 0;
  bottom: -100%;
`;

export default NavLink;
