import { useState, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { gsProductBacklog } from '@/hooks/useBacklogItem'

export function ProductKanban() {
  const [pbl] = useRecoilState(gsProductBacklog)
  const [focusId, setFocusId] = useState<string | null>(null)
  const focusItem = useMemo(() => pbl.find((it) => it.id === focusId), [focusId, pbl])

  return <Lane2_200>
    <KanbanBody
      data={pbl}
      banner="Product Backlog"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
