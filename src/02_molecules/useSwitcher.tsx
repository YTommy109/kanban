import { useState } from "react";
import { styled } from 'goober'

const Ul = styled('ul')`
  width:                  15rem;
  display:                grid;
  grid-template-columns:  repeat(3, 1fr);
  li {
    width:                5rem;
    text-align:           center;
    padding:              0.25rem;
    border:               thin solid yellow;
    background-color:   yellow;
    &:first-child {
      border-radius:      1rem 0 0 1rem;
    }
    &:last-child {
      border-radius:      0 1rem 1rem 0;
    }
    &:hover:not(.active) {
      color:            white;
      background-color: khaki;
    }
    &.active {
      background-color: gold;
    }
  }
`

export function useSwitcher(items:string[]) {
  const [active, setActive] = useState<number>(0)

  return [active,
    <>
      <Ul>
        {items.map((it, idx) =>
          <li
            key       = {idx}
            className = {idx===active ? 'active' : ''}
            onClick   = {() => setActive(idx)}
            >
            {it}
          </li>
        )}
      </Ul>
    </>
  ]
}
