import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export function ProductKanban() {
  const { pbl, focusPBI } = useBacklogItems()
  const focusItem = useMemo(() => pbl.find((it) => it.id === focusPBI), [focusPBI, pbl])

  return <Lane2_200>
    <KanbanBody
      data={pbl}
      banner="Product Backlog"
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
