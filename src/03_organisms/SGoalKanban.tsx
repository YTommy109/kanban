import { useState, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { gsSprintGoal } from '@/hooks/useBacklogItem'

export default function SGoalKanban() {
  const [sgoal] = useRecoilState(gsSprintGoal)
  const [focusId, setFocusId] = useState<string|null>(null)
  const focusItem = useMemo(() => sgoal.find((it) => it.id === focusId), [focusId, sgoal])

  return <Lane2_200>
    <KanbanBody
      data={sgoal}
      banner="Sprint Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
