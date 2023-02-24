import ExtractBankStatement from 'app/pages/module/bank-statement'
import BankStatementUploadFile from 'app/pages/module/bank-statement/UploadFile'
import BankStatementListFile from 'app/pages/module/bank-statement/UploadList'
import BankStatementOutput from 'app/pages/module/bank-statement/ExtractedOutput'
import {FC, Suspense} from 'react'
import {Route} from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import {WithChildren} from 'sr/helpers'
import ExtractCheque from 'app/pages/module/extract-cheque'
import UploadFile from 'app/pages/module/extract-cheque/UploadFile'
import UploadList from 'app/pages/module/extract-cheque/UploadList'
import ExtractedOutput from 'app/pages/module/extract-cheque/ExtractedOutput'
import CompareName from 'app/pages/module/compare-name'
import UploadListTemplate from 'app/pages/templates/xtract/UploadListTemplate'
import XtractTemplate from 'app/pages/templates/xtract/XtractTemplate'
import UploadTemplate from 'app/pages/templates/xtract/UploadTemplate'
import ExtractedOutputTemplate from 'app/pages/templates/xtract/ExtractedOutputTemplate'
import ProcessIndex from 'app/pages/process/ProcessIndex'
import IngestionIndex from 'app/pages/process/IngestionIndex'
import ManipulationIndex from 'app/pages/process/ManipulationIndex'
import OutputIndex from 'app/pages/process/OutputIndex'

// export const IRUBankStatement = () => []
export const ProcessUrls = () => [
  <Route key='2' element={<ProcessIndex />}>
    <Route
      path={`${process.env.REACT_APP_BAZAAR_INGESTION}*`}
      element={
        <SuspensedView>
          <IngestionIndex />
        </SuspensedView>
      }
    />
    <Route
      path={`${process.env.REACT_APP_BAZAAR_MANIPULATION}*`}
      element={
        <SuspensedView>
          <ManipulationIndex />
        </SuspensedView>
      }
    />
    <Route
      path='/process/manipulation/*'
      element={
        <SuspensedView>
          <ManipulationIndex />
        </SuspensedView>
      }
    />
    <Route
      path='/process/output/*'
      element={
        <SuspensedView>
          <OutputIndex />
        </SuspensedView>
      }
    />
  </Route>,
]
export const ChequeExtractUrl = () => [
  <Route key='3' element={<ExtractCheque />}>
    <Route
      path='/engine/extract-cheque/*'
      element={
        <SuspensedView>
          <UploadFile />
        </SuspensedView>
      }
    />
    <Route
      path='/engine/extract-cheque/upload-list'
      element={
        <SuspensedView>
          <UploadList />
        </SuspensedView>
      }
    />
    <Route
      path='/engine/extract-cheque/extracted-output'
      element={
        <SuspensedView>
          <ExtractedOutput />
        </SuspensedView>
      }
    />
  </Route>,
]

const SuspensedView: FC<WithChildren> = ({children}) => {
  TopBarProgress.config({
    barColors: {
      '0': '#000',
    },
    barThickness: 4,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}
