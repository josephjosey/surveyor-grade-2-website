import { BankQuestion } from '../types';
import database from '../../data/database.json';

export const INITIAL_BANK_QUESTIONS: BankQuestion[] = database.bankQuestions as BankQuestion[];
