import { useState, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { gsProductGoal } from '@/hooks/useBacklogItem'

export default function PGoalKanban() {
  const [pgoal] = useRecoilState(gsProductGoal)
  const [focusId, setFocusId] = useState<string|null>(null)
  const focusItem = useMemo(() => pgoal.find((it) => it.id === focusId), [focusId, pgoal])

  return <Lane2_200>
    <KanbanBody
      data        = {pgoal}
      banner      = "Product Goals"
      setFocusId  = {setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
