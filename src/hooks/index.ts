import { ElMessage } from 'element-plus'

export const useCopy = (text: string) => {
  let inputEl = document.createElement('input')
  inputEl.value = text
  document.body.appendChild(inputEl)
  inputEl.select()
  document.execCommand('Copy')
  ElMessage.success('ε€εΆζε!')
  document.body.removeChild(inputEl)
}
