import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import sbl from '@/_data/sbl.json'

export default function SprintKanban() {
  const [focusId, setFocusId] = useState<string | null>(null)
  const focusItem = useMemo(() => sbl.find((it) => it.id === focusId), [focusId])

  return <Lane2_200>
    <KanbanBody
      data={sbl}
      banner="Sprint Backlog"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
