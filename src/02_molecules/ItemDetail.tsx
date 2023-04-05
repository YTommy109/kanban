import { styled } from 'goober'
import dayjs from 'dayjs'

const Section = styled('section')`
  width:                  100%;
  padding:                1rem;
  display:                grid;
  grid-template-columns:  1fr;
  grid-template-rows:     auto auto auto 1fr;  
  grid-row-gap:           1rem;

  article {
    display:              grid;
    grid-row-gap:         0.5rem;
  }

  h2 {
    font-size:            large;
    font-weight:          bold;
  }

  ol {
    counter-reset:        count 0;
  }
  ol li {
    padding-left:         1rem;
    &:before {
      content:            counter(count) ". ";
      counter-increment:  count 1;
    }
  }
`

type Props = {
  item: BacklogItem;
};
export function ItemDetail({ item }:Props) {
  return <Section>
    <article>
      <h2>タイトル</h2>
      {item.title}
    </article>
    <article>
      <h2>成果物 (完了状態)</h2>
      <ol>
        {item.dod.map((it, idx) => <li key={idx}>{it}</li>)}
      </ol>
    </article>
    <article>
      <h2>作成日</h2>
      <time dateTime={item.created_at}>
        {dayjs(item.created_at).format('YYYY/MM/DD HH:mm')}
      </time>
    </article>
  </Section>
}
