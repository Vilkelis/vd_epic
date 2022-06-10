import { EnvKey, envList, EnvListItem, envMap } from '../../../env.config'

const envDict: Record<EnvListItem, string> = envList.reduce(
  (acc, cur: EnvListItem) => ({ ...acc, [cur]: process.env[cur] || '' }),
  {} as Record<EnvListItem, string>,
)

type Env = Record<EnvKey, boolean | string | number | null>
const env: Env = (Object.keys(envMap) as EnvListItem[]).reduce((acc, cur) => {
  if (envMap[cur].type === 'boolean') {
    return { ...acc, [envMap[cur].name]: envDict[cur] === 'true' }
  }

  if (envMap[cur].type === 'number') {
    return {
      ...acc,
      [envMap[cur].name]: Number.isNaN(+envDict[cur]) ? null : +envDict[cur],
    }
  }

  return { ...acc, [envMap[cur].name]: envDict[cur] }
}, {} as Env)

export default env
