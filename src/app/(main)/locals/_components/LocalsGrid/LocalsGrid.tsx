import { LocalItem } from '@app/(main)/_components/LocalItem'
// import NavLink from '@app/_components/NavLink'
import { Local } from '@locals/mockups'
import { Grid } from '@mantine/core'
import Link from 'next/link'

type Props = {
  locals: Local[]
}

const LocalsGrid = ({ locals }: Props) => {
  return (
    <Grid p={'3vw'} justify='center'>
      {locals?.map((local, i) => (
        <Grid.Col
          span='auto'
          key={local.name + i}
          style={{ flexGrow: 0, flex: 1 }}
          miw={'15rem'}
          maw={'15rem'}
        >
          <Link
            href={`?localModal=${local.name}`}
            scroll={false}
            style={{ textDecoration: 'none' }}
          >
            <LocalItem
              local={{
                name: local.name,
                icon: local.icon,
                banner: local.banner,
                category: local.categoryName
              }}
              index={0}
            />
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  )
}
export default LocalsGrid
