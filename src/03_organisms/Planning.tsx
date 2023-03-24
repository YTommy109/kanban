import { useState, useEffect } from 'react'
import { Lane4 } from '@/04_templates/Lane'
import { KanbanLane } from '@/02_molecules/KanbanLane'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export function Planning() {
  const {pgs, sgs: sbs, pbl, sbl} = useBacklogItems()
  const [fpgl, setFpgl] = useState<string | null>(null)
  const [fsgl, setFsgl] = useState<string | null>(null)
  const [fpbl, setFpbl] = useState<string | null>(null)

  useEffect(() => {
    setFsgl(null)
    setFpbl(null)
  }, [fpgl])

  useEffect(() => {
    setFpbl(null)
  }, [fsgl])

  return <Lane4>
    <KanbanLane
      title       = "Product Goal"
      data        = {pgs}
      setFocusId  = {setFpgl}
      />
    <KanbanLane
      title       = "Sprint Goal"
      data        = {sbs.filter((it) => it.parentId === fpgl)}
      setFocusId  = {setFsgl}
      />
    <KanbanLane
      title       = "Product Backlog"
      data        = {pbl.filter((it) => it.parentId === fsgl)}
      setFocusId  = {setFpbl}
      />
    <KanbanLane
      title       = "Sprint Backlog"
      data        = {sbl.filter((it) => it.parentId === fpbl)}
      />
  </Lane4>
}
