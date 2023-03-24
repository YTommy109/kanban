import { styled } from 'goober'

export const Lane2_200 = styled('div')`
  display:                grid;
  grid-template-columns:  1fr 22rem;
`

export const Lane3 = styled('div')`
  display:                grid;
  grid-template-columns:  repeat(3, minmax(14rem, 1fr));
`

export const Lane4 = styled('div')`
  display:                grid;
  grid-template-columns:  repeat(4, minmax(14rem, 1fr));
`

const Section = styled('section')`
  border:             solid 1px rgb(209 213 219);
  h2 {
    padding:          0.5rem;
    background-color: rgb(99 102 241);
    color:            rgb(255 255 255);
  }
`

type Props = {
  title: string;
  children: React.ReactNode;
};

export function BacklogLane({ title, children }: Props) {
  return <>
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  </>
}
