import { useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems, useFocus } from '@/hooks/backlog'

export function Kanban() {
  const { pgs, sgs, pbl, sbl } = useBacklogItems()
  const { focusPGI, focusSGI, focusPBI, focusSBI } = useFocus()
  const focusPGItem = useMemo(() => pgs.find((it) => it.id === focusPGI), [focusPGI, pgs])
  const focusSGItem = useMemo(() => sgs.find((it) => it.id === focusSGI), [focusSGI, sgs])
  const focusPBItem = useMemo(() => pbl.find((it) => it.id === focusPBI), [focusPBI, pbl])
  const focusSBItem = useMemo(() => sbl.find((it) => it.id === focusSBI), [focusSBI, sbl])

return <>
    <Lane2_200>
      <KanbanBody
        data={pgs}
        banner="Product Goals"
      />
      {focusPGItem && <ItemDetail item={focusPGItem} />}
    </Lane2_200>
    <Lane2_200>
      <KanbanBody
        data={sgs}
        banner="Sprint Goals"
      />
      {focusSGItem && <ItemDetail item={focusSGItem} />}
    </Lane2_200>
    <Lane2_200>
      <KanbanBody
        data={pbl}
        banner="Product Backlog"
      />
      {focusPBItem && <ItemDetail item={focusPBItem} />}
    </Lane2_200>
    <Lane2_200>
      <KanbanBody
        data={sbl}
        banner="Sprint Backlog"
      />
      {focusSBItem && <ItemDetail item={focusSBItem} />}
  </Lane2_200>
  </>
}
