import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export default function SprintKanban() {
  const { sbl, focusSBI } = useBacklogItems()
  const focusItem = useMemo(() => sbl.find((it) => it.id === focusSBI), [focusSBI, sbl])

  return <Lane2_200>
    <KanbanBody
      data={sbl}
      banner="Sprint Backlog"
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
