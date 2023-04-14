import {useMemo} from 'react'
import {Lane2_22rem} from '@/04_templates/Lane'
import {KanbanBody} from '@/03_organisms/KanbanBody'
import {ItemDetail} from '@/02_molecules/ItemDetail'
import {useBacklog} from '@/hooks/backlog'

export function Kanban() {
  const {pgs, sgs, pbl, sbl, getFocusItem} = useBacklog()
  const item = useMemo(() => getFocusItem(), [getFocusItem])

return <>
    <Lane2_22rem>
      <div>
        <KanbanBody
          data={pgs}
          banner="Product Goals"
        />
        <KanbanBody
          data={sgs}
          banner="Sprint Goals"
        />
        <KanbanBody
          data={pbl}
          banner="Product Backlog"
        />
        <KanbanBody
          data={sbl}
          banner="Sprint Backlog"
        />
      </div>
      {item && <ItemDetail item={item} />}
  </Lane2_22rem>
  </>
}
