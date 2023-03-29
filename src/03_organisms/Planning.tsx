import { useEffect } from 'react'
import { Lane4 } from '@/04_templates/Lane'
import { PlanningLane } from '@/02_molecules/PlanningLane'
import { useBacklogItems, useFocus } from '@/hooks/backlog'

export function Planning() {
  const { pgs, sgs, pbl, sbl } = useBacklogItems()
  const { focusPGI, focusSGI, focusPBI, changeFocusItem } = useFocus()

  useEffect(() => {
    changeFocusItem(null, 'SGI')
    changeFocusItem(null, 'PBI')
  }, [focusPGI, changeFocusItem])

  useEffect(() => {
    changeFocusItem(null, 'PBI')
  }, [focusSGI, changeFocusItem])

  return <Lane4>
    <PlanningLane
      title="Product Goal"
      data={pgs}
      itemType={'PGI'}
    />
    <PlanningLane
      title="Sprint Goal"
      data={sgs.filter((it) => it.parentId === focusPGI)}
      itemType={'SGI'}
    />
    <PlanningLane
      title="Product Backlog"
      data={pbl.filter((it) => it.parentId === focusSGI)}
      itemType={'PBI'}
    />
    <PlanningLane
      title="Sprint Backlog"
      data={sbl.filter((it) => it.parentId === focusPBI)}
      itemType={'SBI'}
    />
  </Lane4>
}
