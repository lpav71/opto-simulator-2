package repositories

import (
	"gorm.io/gorm"
	"optometrist-simulator/internal/database"
	"optometrist-simulator/internal/models"
)

// ClientRefractionRepository интерфейс для работы с клиентскими данными
type ClientRefractionRepository interface {
	Create(client *models.ClientRefraction) error
	FindAll() ([]models.ClientRefraction, error)
	FindByID(id uint) (*models.ClientRefraction, error)
	Update(client *models.ClientRefraction) error
	Delete(id uint) error
}

// clientRefractionRepository реализация интерфейса
type clientRefractionRepository struct {
	db *gorm.DB
}

// NewClientRefractionRepository создает новый экземпляр репозитория
func NewClientRefractionRepository() ClientRefractionRepository {
	database.Connection()
	return &clientRefractionRepository{db: database.DB}
}

// Create добавляет нового клиента в базу данных
func (r *clientRefractionRepository) Create(client *models.ClientRefraction) error {
	return r.db.Create(client).Error
}

// FindAll возвращает всех клиентов из базы данных
func (r *clientRefractionRepository) FindAll() ([]models.ClientRefraction, error) {
	var clients []models.ClientRefraction
	err := r.db.Find(&clients).Error
	return clients, err
}

// FindByID ищет клиента по ID
func (r *clientRefractionRepository) FindByID(id uint) (*models.ClientRefraction, error) {
	var client models.ClientRefraction
	err := r.db.First(&client, id).Error
	if err != nil {
		return nil, err
	}
	return &client, nil
}

// Update обновляет информацию о клиенте в базе данных
func (r *clientRefractionRepository) Update(client *models.ClientRefraction) error {
	return r.db.Save(client).Error
}

// Delete удаляет клиента из базы данных
func (r *clientRefractionRepository) Delete(id uint) error {
	return r.db.Delete(&models.ClientRefraction{}, id).Error
}
