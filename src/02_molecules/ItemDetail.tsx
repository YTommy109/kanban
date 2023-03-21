import dayjs from 'dayjs'

type Props = {
  item: BacklogItem;
};
export function ItemDetail({ item }:Props) {
  return <div>
    <h2>{item.title}</h2>
    <ul>
      {item.dod.map((it, idx) => <li key={idx}>{it}</li>)}
    </ul>
    <time dateTime={item.created_at}>
      {dayjs(item.created_at).format('YYYY/MM/DD HH:mm')}
    </time>
  </div>
}
