package repositories

import (
	"gorm.io/gorm"
	"optometrist-simulator/internal/database"
	"optometrist-simulator/internal/models"
)

type LensRepositoryInterface interface {
	Create(lens *models.Lenses) error
	GetByID(id int) (*models.Lenses, error)
	GetAll() ([]models.Lenses, error)
	Update(lens *models.Lenses) error
	Delete(id int) error
	GetConcaveSphere() ([]float64, error)
	GetConcaveCylinder() ([]float64, error)
}

type LensesRepository struct {
	DB *gorm.DB
}

func NewLensesRepository() *LensesRepository {
	database.Connection()
	return &LensesRepository{DB: database.DB}
}

func (l *LensesRepository) Create(lens *models.Lenses) error {
	return l.DB.Create(lens).Error
}

func (l *LensesRepository) GetByID(id int) (*models.Lenses, error) {
	var lens models.Lenses
	err := l.DB.First(&lens, id).Error
	return &lens, err
}

func (l *LensesRepository) GetAll() ([]models.Lenses, error) {
	var lenses []models.Lenses
	err := l.DB.Find(&lenses).Error
	return lenses, err
}

func (l *LensesRepository) Update(lens *models.Lenses) error {
	return l.DB.Save(lens).Error
}

func (l *LensesRepository) Delete(id int) error {
	return l.DB.Delete(&models.Lenses{}, id).Error
}

func (l *LensesRepository) GetConcaveSphere() ([]float64, error) {
	var values []float64
	err := l.DB.Model(&models.Lenses{}).Select("value").Where("lens_type = ?", "CONCAVE SPHERE").Find(&values).Error
	return values, err
}

func (l *LensesRepository) GetConcaveCylinder() ([]float64, error) {
	var values []float64
	err := l.DB.Model(&models.Lenses{}).Select("value").Where("lens_type = ?", "CONCAVE CYLINDER").Find(&values).Error
	return values, err
}
