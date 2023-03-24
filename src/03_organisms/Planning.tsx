import { useState, useEffect } from 'react'
import { Lane4 } from '@/04_templates/Lane'
import { PlanningLane } from '@/02_molecules/PlanningLane'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export function Planning() {
  const { pgs, sgs, pbl, sbl } = useBacklogItems()
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
    <PlanningLane
      title="Product Goal"
      data={pgs}
      setFocusId={setFpgl}
      itemType={'PGI'}
    />
    <PlanningLane
      title="Sprint Goal"
      data={sgs.filter((it) => it.parentId === fpgl)}
      setFocusId={setFsgl}
      itemType={'SGI'}
    />
    <PlanningLane
      title="Product Backlog"
      data={pbl.filter((it) => it.parentId === fsgl)}
      setFocusId={setFpbl}
      itemType={'PBI'}
    />
    <PlanningLane
      title="Sprint Backlog"
      data={sbl.filter((it) => it.parentId === fpbl)}
      itemType={'SBI'}
    />
  </Lane4>
}
