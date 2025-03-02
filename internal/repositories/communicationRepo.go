package repositories

import (
	"gorm.io/gorm"
	"optometrist-simulator/internal/database"
	"optometrist-simulator/internal/models"
)

// CommunicationRepositoryInterface описывает методы репозитория
type CommunicationRepositoryInterface interface {
	All() ([]models.Communication, error)
	GetByID(id uint) (*models.Communication, error)
	Create(communication *models.Communication) error
	Update(communication *models.Communication) error
	Delete(id uint) error
}

type CommunicationRepository struct {
	DB *gorm.DB // Подключение к БД
}

func NewCommunicationRepository() *CommunicationRepository {
	database.Connection()
	return &CommunicationRepository{DB: database.DB}
}

// All - получение всех записей
func (c *CommunicationRepository) All() ([]models.Communication, error) {
	var communication []models.Communication
	if err := c.DB.Find(&communication).Error; err != nil {
		return nil, err
	}
	return communication, nil
}

// GetByID - получение записи по ID
func (c *CommunicationRepository) GetByID(id uint) (*models.Communication, error) {
	var communication models.Communication
	if err := c.DB.First(&communication, id).Error; err != nil {
		return nil, err
	}
	return &communication, nil
}

// Create - создание новой записи
func (c *CommunicationRepository) Create(communication *models.Communication) error {
	if err := c.DB.Create(communication).Error; err != nil {
		return err
	}
	return nil
}

// Update - обновление существующей записи
func (c *CommunicationRepository) Update(communication *models.Communication) error {
	if err := c.DB.Save(communication).Error; err != nil {
		return err
	}
	return nil
}

// Delete - удаление записи
func (c *CommunicationRepository) Delete(id uint) error {
	if err := c.DB.Delete(&models.Communication{}, id).Error; err != nil {
		return err
	}
	return nil
}
