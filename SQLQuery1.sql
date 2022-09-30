/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Gender]
      ,[Style]
      ,[Size]
      ,[Price]
  FROM [model].[dbo].[Table]

  