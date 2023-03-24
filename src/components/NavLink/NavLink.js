import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Top></Top>

      <Horizontal>
        <Left></Left>
        <Content>
          {children}
        </Content>
        <Right></Right>
      </Horizontal>

      <Bottom></Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  --color: var(--color-gray-900);
  display: block;
  position: relative;
  font-size: 1.125rem;
  /* font-size: 5rem; */
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    --color: var(--color-secondary);
  }
`;

const Horizontal = styled.div`
  display: flex;
`;

const Content = styled.div`
  align-self: baseline;
  padding-left: 3px;
  padding-right: 3px;
`;

const Bottom = styled.div`
  position: relative;
  height: 3px;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--color);
      animation: slide-right 1000ms forwards linear 1, slide-half 1500ms 2000ms forwards ease 1;
    }

    @keyframes slide-right {
      from {
        transform: translateX(calc(-100% + -1px));
      }
      to {
        transform: translateX(calc(100% + 1px));
      }
    }

    @keyframes slide-half {
      from {
        transform: translateX(calc(-100% + -1px));
      }
      to {
        transform: translateX(0);
      }
    }
  }
`;

const Right = styled.div`
  position: relative;
  width: 3px;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 3px;
      height: 200%;
      background-color: var(--color);
      animation: slide-up 1000ms 500ms both linear 1;
    }

    @keyframes slide-up {
      from {
        transform: translateY(calc(100% + 3px));
      }
      to {
        transform: translateY(calc(-100% + -2px));
      }
    }
  }
`

const Top = styled.div`
  position: relative;
  height: 3px;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: var(--color);
      animation: slide-left 1500ms 750ms both linear 1;
    }

    @keyframes slide-left {
      from {
        transform: translateX(calc(100% + 1px));
      }
      to {
        transform: translateX(calc(-100% + -1px));
      }
    }
  }
`;

const Left = styled.div`
  position: relative;
  width: 3px;

  ${Wrapper}:hover &,
  ${Wrapper}:focus & {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 3px;
      height: 200%;
      background-color: var(--color);
      animation: slide-down 1500ms 1150ms both linear 1;
    }

    @keyframes slide-down {
      from {
        transform: translateY(calc(-100% + 1px));
      }
      to {
        transform: translateY(calc(100% + 3px));
      }
    }
  }
`;





export default NavLink;
