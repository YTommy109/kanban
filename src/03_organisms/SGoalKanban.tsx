import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export default function SGoalKanban() {
  const { sgs, focusSGI } = useBacklogItems()
  const focusItem = useMemo(() => sgs.find((it) => it.id === focusSGI), [focusSGI, sgs])

  return <Lane2_200>
    <KanbanBody
      data={sgs}
      banner="Sprint Goals"
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
