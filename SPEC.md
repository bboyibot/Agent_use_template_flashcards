
# Spec: Breaking Move Library

## Goal
A simple website that helps Breaking dancers find moves based on category and difficulty.

## Users
Breaking dancers, beginners and coaches.

## Features
F1. Select a Breaking category.
F2. Select a difficulty level.
F3. Click a "Find Moves" button.
F4. Show matching moves with name, category, difficulty and description.
F5. Display "No moves found" if nothing matches.

## Data
Moves are stored in a JavaScript array.

Each move has:
- name
- category
- difficulty
- description

Categories:
- Toprock
- Footwork
- Powermoves
- Freezes

Difficulty levels:
- Beginner
- Intermediate
- Advanced

## Acceptance Criteria
- Users can select a category and difficulty.
- Clicking "Find Moves" displays matching moves.
- The results update without reloading the page.
- A message appears when no moves match.

## Out of Scope
- No login
- No database
- No videos or pictures
- No external libraries or frameworks
- No adding or editing moves by users

## Look & Feel
Simple, clean and easy to use.
