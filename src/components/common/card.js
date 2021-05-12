import React from 'react'
import {Card, CardContent, CardHeader, Grid} from '@material-ui/core'
const CustomCard = props => {
  const {children, outlined} = props
  if (outlined)
    return (
      <Grid item {...gridProps}>
        <Card
          variant={'outlined'}
          style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          {headerProps.title && <CardHeader {...headerProps} />}
          <CardContent {...contentProps} style={{flexGrow: '2'}}>
            {children}
          </CardContent>
        </Card>
      </Grid>
    )
  else
    return (
      <Grid item {...gridProps}>
        {headerProps.title && <CardHeader {...headerProps} />}
        <CardContent {...contentProps}>{children}</CardContent>
      </Grid>
    )
}
export default CustomCard
