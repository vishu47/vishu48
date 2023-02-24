import DashboardWrapper from 'app/pages/dashboard/client/DashboardWrapper'
import {render, screen, cleanup, within} from '@testing-library/react'

afterEach(() => {
  // cleanup on exiting
  cleanup()
})

test('Render Dashboard Wrapper component', () => {
  render(<DashboardWrapper />)
  const dashboard = screen.getByTestId('dashboard-1')
  expect(dashboard).toBeInTheDocument()
})

test('Render Dashboard Wrapper Why Swoosh component', () => {
  render(<DashboardWrapper />)
  const dashboard = screen.getByTestId('why_swoosh')
  expect(dashboard).toBeInTheDocument()
})

// get number of card within the wy swoosh card section
test('Render Dashboard Wrapper Why Swoosh card Content', () => {
  render(<DashboardWrapper />)
  const whyswooshcard = screen.getByTestId('why_swoosh_card')
  expect(whyswooshcard).toBeInTheDocument()
  const {getAllByText} = within(screen.getByTestId('why_swoosh_card_child'))
  const whyswooshcardchild = getAllByText('Read More')
  expect(whyswooshcardchild).toHaveLength(4)
})

// check for Conversational AI section
test('Render Dashboard Conversational AI Section', () => {
  render(<DashboardWrapper />)
  const DataID = screen.getByTestId('conversationalAI')
  expect(DataID).toBeInTheDocument()
  const Datatext = screen.getAllByText('Conversational AI Transforms Insurance')
  expect(Datatext).toBeTruthy()
})

// check for Conversational AI Card section
test('Render Dashboard Conversational AI Card Section', async () => {
  render(<DashboardWrapper />)
  const DataID = screen.getByTestId('conversationalAI')
  expect(DataID).toBeInTheDocument()
  const {getAllByTestId} = within(screen.getByTestId('conversationalAICard'))
  const cards = getAllByTestId('card_test')
  expect(cards).toHaveLength(5)
})

// check for chatbot section
test('Render Dashboard Chat Bot Section', async () => {
  render(<DashboardWrapper />)
  const DataID = screen.getByTestId('chatbotId')
  expect(DataID).toBeInTheDocument()
  const Text = screen.getByText('Looking for automate something?')
  expect(Text).toBeTruthy()
})

// check for chatbot section
test('Render Dashboard Chat Bot Section With read more content', async () => {
  render(<DashboardWrapper />)
  const {getAllByText} = within(screen.getByTestId('chatbotId'))
  const Text = getAllByText('Read More')
  expect(Text).toHaveLength(1)
})
