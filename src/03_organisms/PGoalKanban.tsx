import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export default function PGoalKanban() {
  const { pgs, focusPGI } = useBacklogItems()
  const focusItem = useMemo(() => pgs.find((it) => it.id === focusPGI), [focusPGI, pgs])

  return <Lane2_200>
    <KanbanBody
      data={pgs}
      banner="Product Goals"
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
